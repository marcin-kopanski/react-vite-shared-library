export { Button } from "./components/Button";
export { Input } from "./components/Input";
export { Label } from "./components/Label";

export { SharedContext, SharedContextProvider } from "./contexts/SharedContext";

export { useSharedContext } from "./hooks/UseSharedContext";

export function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}
