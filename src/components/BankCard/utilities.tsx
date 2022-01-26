
export const cards = [
  {backgroundColor: '#F09D5A', cardNumber: "2001", expires: "12/25", cardHolder: "Lindsey Johnson"},
  {backgroundColor: '#8C72FB', cardNumber: "8014", expires: "08/21", cardHolder: "Lindsey Johnson"},
  {backgroundColor: '#54D3AD', cardNumber: "3881", expires: "21/24", cardHolder: "Lindsey Johnson"},
];

export type CardProps = {
  backgroundColor: string;
  cardNumber: string;
  expires: string;
  cardHolder: string;
  index?: any;
  onSwap?: any;
};

export type CardNumberProps = {
  number?: string
}

export type CardTitleProps = {
  title: string;
  info: string;
};