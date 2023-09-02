import { Title } from "./title.styles";

interface Props {
  title: string;
}

export const PageTitle = ({ title }: Props) => (
  <>
    <Title>{title}</Title>
    <hr />
  </>
);
