import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const defaultImage =
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60';

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`property/${externalID}`} passHref>
    <Flex
      flexWrap='wrap'
      w='400px'
      p='5'
      m='3'
      borderRadius='20'
      paddingTop='0'
      justifyContent='flex-start'
      cursor='pointer'
      shadow='md'
    >
      <Box>
        <Image
          src={coverPhoto ? coverPhoto.url : defaultImage}
          width={400}
          height={260}
          alt='house'
        />
      </Box>
      <Box w='full'>
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>
              {isVerified && <GoVerified />}
            </Box>
            <Text fontWeight='bold' fontSize='lg' color='red.500'>
              USD {millify(price)} {rentFrequency && `/${rentFrequency}`}
            </Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url} />
          </Box>
        </Flex>
        <Flex
          alignItems='center'
          p='2'
          justifyContent='space-between'
          w='250px'
          color='blue.400'
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft
          <BsGridFill />
        </Flex>
        <Text fontSize='lg'>
          {title.length > 30 ? `${title.substring(0, 30)}...` : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property;
