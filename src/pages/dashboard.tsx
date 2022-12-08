import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Dashboard() {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorders: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2022-12-01T00:00:00.000Z',
        '2022-12-02T00:00:00.000Z',
        '2022-12-03T00:00:00.000Z',
        '2022-12-04T00:00:00.000Z',
        '2022-12-05T00:00:00.000Z',
        '2022-12-06T00:00:00.000Z',
        '2022-12-07T00:00:00.000Z',
      ]
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  };

  const series = [
    {
      name: "series1",
      data: [30, 50, 81, 128, 109, 85, 132],
    },
  ];
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" maxW="1480px" my="6" mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px">
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="large" mb="4">
              Taxa de abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
