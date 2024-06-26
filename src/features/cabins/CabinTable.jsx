import { useSearchParams } from 'react-router-dom';
import { useCabins } from './useCabins';

import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import Empty from '../../ui/Empty';

const CabinTable = () => {
  const { cabins, isLoading } = useCabins();
  const [searchParams] = useSearchParams();

  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabins;

  // 1) FILTER

  if (filterValue === 'all') filteredCabins = cabins;
  if (filterValue === 'with-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);
  if (filterValue === 'no-discount')
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);

  // 2) SORT
  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;
  const sortedCabins = filteredCabins
    ? filteredCabins.sort((a, b) => (a[field] - b[field]) * modifier)
    : null;

  if (isLoading) return <Spinner />;

  if (!cabins.length) return <Empty resourceName='cabins' />;

  return (
    <Menus>
      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow key={cabin.id} cabin={cabin} />}
        />
      </Table>
    </Menus>
  );
};

export default CabinTable;
