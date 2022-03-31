import './TransactionHistory.css';

interface Props {
  items: {
    id: string;
    type: string;
    amount: string;
    currency: string;
  }[];
}

function TransactionHistory({ items }: Props) {
  return (
    <table className="transaction_history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
