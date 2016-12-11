import { style, media } from 'typestyle';

export const hideAt = (width: number) => style(media({maxWidth: width}, { display: 'none'}));
