import type { ForceMountable } from '@rnr/types';

interface CollapsibleRootProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
}

type CollapsibleContentProps = ForceMountable;

export type { CollapsibleContentProps, CollapsibleRootProps };