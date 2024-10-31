import { Button } from "@repo/shared-ui/components/ui/button";

type Props = {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
}

export const LoginButton = ({ variant = "default" }: Props) => {
  return (
  // TODO: next に依存しているので、別途対応が必要
    // <Button variant={variant} onClick={() => router.push("/login")}>
    <Button variant={variant} onClick={() => console.log("login")}>
      Sign in
    </Button>
  );
};
