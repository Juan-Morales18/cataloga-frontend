"use client";

import { useState, useEffect } from "react";
import {
  getSessionFromAllSources,
  getSessionData,
  getSessionFromCookies,
} from "@/utils/session-utils";

export function SessionDebug() {
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        console.log("=== SESSION DEBUG COMPONENT ===");

        // Try all methods
        const allSources = await getSessionFromAllSources();
        const directSession = await getSessionData();
        const cookieSession = getSessionFromCookies();

        console.log("All sources:", allSources);
        console.log("Direct session:", directSession);
        console.log("Cookie session:", cookieSession);

        setSessionData({
          allSources,
          directSession,
          cookieSession,
          cookies: document.cookie,
        });
      } catch (error) {
        console.error("Session debug error:", error);
        setSessionData({ error: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading session debug...</div>;
  }

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-bold mb-4">Session Debug</h3>

      <div className="space-y-4">
        <div>
          <h4 className="font-semibold">All Sources:</h4>
          <pre className="bg-white p-2 rounded text-xs overflow-auto">
            {JSON.stringify(sessionData?.allSources, null, 2)}
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">Direct Session:</h4>
          <pre className="bg-white p-2 rounded text-xs overflow-auto">
            {JSON.stringify(sessionData?.directSession, null, 2)}
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">Cookie Session:</h4>
          <pre className="bg-white p-2 rounded text-xs overflow-auto">
            {JSON.stringify(sessionData?.cookieSession, null, 2)}
          </pre>
        </div>

        <div>
          <h4 className="font-semibold">All Cookies:</h4>
          <pre className="bg-white p-2 rounded text-xs overflow-auto">
            {sessionData?.cookies}
          </pre>
        </div>
      </div>
    </div>
  );
}

