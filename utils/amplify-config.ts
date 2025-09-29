"use client";
import { Amplify } from "aws-amplify";
import { configuration } from "./configuration";

Amplify.configure(configuration, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
