import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import './App.css';
import { LocalizationProvider } from '@mui/x-date-pickers';
import TimeRange from './component/TimeRange';
import { Paper, Stack, styled, ThemeProvider } from '@mui/material';
import Week from './component/TimeRange/Week';

const AppContainer = styled('div')({
  height: '100vh',
  padding: '1rem',
});
function App() {
  return (
    // <ThemeProvider>
    <LocalizationProvider dateAdapter={AdapterLuxon}>
    <AppContainer >
    <Stack gap={2}>
       <TimeRange></TimeRange>
       <TimeRange></TimeRange>
       <Week weekYear={2020} weekNumber={1} />
       <Week weekYear={2020} weekNumber={2} />
    </Stack>
    </AppContainer>
     </LocalizationProvider>
    // </ThemeProvider>
  );
}

export default App;
