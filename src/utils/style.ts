import { media } from 'typestyle';

export const hideAtRange = (from: number, to?: number) => media({ minWidth: from, maxWidth: to }, { display: 'none' });
export const hideInPrint = media({ type: 'print' }, { display: 'none' });
