interface IProps {
  value: string;
  onChangeFilter: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Filter = ({ value, onChangeFilter }: IProps) => {
  return (
    <label>
      Find contacts by name{' '}
      <input type="text" value={value} onChange={onChangeFilter} />
    </label>
  );
};

export default Filter;
