import '../PhonebookHooks.css';

interface IProps {
  value: string;
  onChangeFilter: (event: React.FormEvent<HTMLInputElement>) => void;
}

const Filter = ({ value, onChangeFilter }: IProps) => {
  return (
    <label className="find_contact">
      Find contacts by name{' '}
      <input
        className="find_contact-input"
        type="text"
        value={value}
        onChange={onChangeFilter}
      />
    </label>
  );
};

export default Filter;
