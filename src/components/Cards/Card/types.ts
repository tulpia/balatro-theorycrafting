type CardProps = {
  name: string;
  label: string;
  color: "coeur" | "carreau" | "pique" | "trefle";
  points: number;
};

export default CardProps;
