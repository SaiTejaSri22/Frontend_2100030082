import React from 'react';
import DataTable from './components/DataTable';

const App = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Age',
        accessor: 'age',
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Country',
        accessor: 'country',
        Filter: DefaultColumnFilter,
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { name: 'John', age: 28, country: 'USA' },
      { name: 'Jane', age: 22, country: 'UK' },
      { name: 'Jack', age: 32, country: 'Canada' },
      { name: 'Sai', age: 18, country: 'India' },
      { name: 'Teja', age: 19, country: 'Australia' },
      { name: 'Ram', age: 25, country: 'Switzerland' },
      { name: 'Ramya', age: 15, country: 'France' },
      { name: 'James', age: 35, country: 'Poland' },
      { name: 'Rames', age: 40, country: 'India' },
      { name: 'George', age: 29, country: 'UK' },
      { name: 'Akhil', age: 20, country: 'New Jersy' },
      { name: 'Thomas', age: 32, country: 'USA' },
      
    ],
    []
  );

  return (
    <div>
      <h1>INTERACTIVE DATA TABLE</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default App;

// Default filter UI
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}
