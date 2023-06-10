import React, { useEffect } from 'react';
import { Loader, Pagination } from '@mantine/core';
import useGetHistory from 'api/hooks/use-get-history';
import Title from 'ui/shared/Title/Title';

import useCombinedStore from 'store';

import HistoryRecord from '../HistoryRecord/HistoryRecord';

import styles from './History.module.scss';

const History = () => {
  const { status, mutate: fetchHistory } = useGetHistory();

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className={styles.history}>
      <Title order={2}>История запросов</Title>
      {status === 'loading' ? <Loader /> : <RecordList />}
      <Pagination total={1}
      />
    </div>
  );
};

const RecordList = () => {
  const records = useCombinedStore(state => state.records);

  console.log(records);

  return <div className={styles.recordList}>
    {records
      .map((record, index) => <HistoryRecord number={index + 1}
        item={record}
        key={index}
        date={record.created_at} />)}
  </div>;
};

export default History;
