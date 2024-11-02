import { Button } from "@repo/shared-ui/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  Dialog as ShadcnDialog,
} from "@repo/shared-ui/components/ui/dialog";

type DeleteDialogProps = {
  onDelete?: () => void;
  disabled?: boolean;
  className?: string;
};

export function DeleteDialogButton({
  onDelete,
  disabled = false,
  className = "",
}: DeleteDialogProps) {
  return (
    <ShadcnDialog>
      <DialogTrigger asChild>
        <Button variant="outline" disabled={disabled} className={className}>
          削除
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogDescription>本当に削除しますか？</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <div className="grid justify-between gap-4">
              <Button variant={"destructive"} type="submit" onClick={onDelete}>
                削除
              </Button>
              <Button type="button" variant="secondary">
                キャンセル
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </ShadcnDialog>
  );
}
