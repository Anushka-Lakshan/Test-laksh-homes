import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl,fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({ purpose,imageUrl,title1,title2,desc1,desc2,linkName,buttonText }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt='Banner' />
    <Box p={5}>
      <Text color="gray.500" fontSize={'sm'} fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="3xl" fontWeight="bold" >
        {title1}<br/> {title2}
      </Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>
        {desc1} <br /> {desc2}
      </Text>
      <Button fontSize={'xl'}>
        
        <Link href={linkName}>{buttonText}</Link>  
      </Button>
    </Box>
  </Flex>
)
  


const Home = ( {propertiesForSale ,propertiesForRent} ) => (
    <Box>
      <Banner 
      purpose={'Rent a home'}
      title1='Find, Rent'
      title2='Everyone'
      desc1='Explore Apartments, Villas, Homes'
      desc2={'and more'}
      linkName='/search?purpose=for-rent'
      buttonText={'Explore Renting'}
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      >
      </Banner>

      <Flex flexWrap='wrap'>
        {propertiesForRent.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>

      <Banner 
      purpose={'Buy a Home'}
      title1='Find, Buy and Own your'
      title2='Dream Home'
      desc1='Explore Apartments, Villas, Homes'
      desc2={'and more'}
      linkName='/search?purpose=for-buy'
      buttonText={'Explore Buying'}
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      
      >
      </Banner>

      <Flex flexWrap={'wrap'}>
      {propertiesForSale.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>

    </Box>
  
)


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    }
  };


}

export default Home;
