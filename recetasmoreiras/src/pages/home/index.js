import { Box } from '@mui/material';
import Header from '../../components/Header';

function Home() {
  return (
    <Box margin="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="RECETAS MOREIRAS"
          subtitle="May your family recipes continue to be passed on!"
        />
      </Box>
    </Box>
  );
}

export default Dashboard;
