import { useState, useEffect } from 'react';
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react';
import Router, { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterData, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = Router.pathname;
    const { query } = Router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      query[item.name] = item.value;
    });

    Router.push({ pathname: path, query });
  };

  return (
    <Flex
      bg='gray.50'
      p='4'
      justifyContent='center'
      flexWrap='wrap'
      border='none'
    >
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            placeholder={filter.placeholder}
            w='fit-content'
            p='2'
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
          >
            {filter?.items?.map((item) => (
              <option value={item.value} bg='gray.50' key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
