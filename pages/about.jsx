import * as React from 'react'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Profile from 'components/profile'
import { Box, Container, Text, Heading, Center, Image, Button } from '@chakra-ui/react'
import { SimpleGrid } from '@chakra-ui/react'
import { TeamData } from 'lib/TeamProfile'

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* //about us */}
      <Container bg="#FAFAFA" maxW="container.xl" px={{base: '6', '2xl': '0'}} mb="16" centerContent>
        <Center>
          <Heading as="h2" size="2xl" pt="3rem" pb="3rem">
            About Us
          </Heading>
        </Center>
        <Center maxW={{base: '100%', md:'75%'}}>
          <Text
            fontSize="lgs"
            ml={['1rem', '5rem', '7rem']}
            mr={['1rem', '5rem', '7rem']}
            align="center"
          >
            LaarnJobs is an open source project cloned from Catoverse YellowJobs.
          </Text>
        </Center>
      </Container>

      <Footer />
    </>
  )
}

// export const getStaticProps = async () => {
//   const disclaimer = fs.readFileSync(
//     path.resolve(process.cwd(), 'lib/disclaimer.txt'),
//     'utf8'
//   )
//   return { props: { disclaimer } }
// }

export default AboutPage
