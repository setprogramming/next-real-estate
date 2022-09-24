import { useState } from "react"
import {useRouter} from "next/router"
import Image from "next/image"
import { Flex, Box, Text, Icon } from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs"
import SearchFilters from "../components/SearchFilters"
import Property from "../components/Property"

const Search = () => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter()

    return (
        <Box>
            <Flex
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2"
                fontWeight="black"
                fontSize="xl"
                alignItems="center"
                justifyContent="center"
                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}        
            >
                <Text>
                    Search Property by Filters
                </Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {[].map((property) => <Property key={property} />)}
            </Flex>
        </Box>
    )
}

export default Search