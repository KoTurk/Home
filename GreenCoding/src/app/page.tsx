import "@/styles/globals.css";
import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import { createTheme, MantineProvider } from '@mantine/core';
import {Average} from "@/app/dashboard/1.Average";
import {Host} from "@/app/dashboard/2.Host";
import {PerVisit} from "@/app/dashboard/5.PerVisit";
import {Comparison} from "@/app/dashboard/3.Comparison";
import {Introduction} from "@/app/dashboard/4.Introduction";

const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function Home() {
  return (
      <MantineProvider theme={theme}>
        <div>
            <Average />
            <Host />
            <PerVisit />
            <Comparison />
            <Introduction />
        </div>
      </MantineProvider>
  );
}
