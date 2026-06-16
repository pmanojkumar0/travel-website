function BudgetPlanner() {
  return (
    <section id="budget" className="budget">
      <h2>Trip Budget Details</h2>

      <table>
        <thead>
          <tr>
            <th>Expense</th>
            <th>Cost</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Travel</td>
            <td>₹1500</td>
          </tr>

          <tr>
            <td>Hotel</td>
            <td>₹2000</td>
          </tr>

          <tr>
            <td>Food</td>
            <td>₹1000</td>
          </tr>

          <tr>
            <td>Activities</td>
            <td>₹500</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default BudgetPlanner;