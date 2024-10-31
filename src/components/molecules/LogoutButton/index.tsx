import { Button } from "@repo/shared-ui/components/ui/button";

type Props = {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
}

export const LogoutButton = ({ variant = "default" }: Props) => {
  return (
// TODO: next に依存しているので別途対応が必要
    // <Button variant={variant} onClick={() => signOut()}>
    <Button variant={variant} onClick={() => {}}>
      Sign Out
    </Button>
  );
};
