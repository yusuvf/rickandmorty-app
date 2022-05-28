
import { Link } from "react-router-dom";
import { useGetAllLocationsQuery } from '../services/location';
import { useGetLocationByIDQuery } from '../services/location';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const Locations = () => {
    const { data, error, isLoading } = useGetAllLocationsQuery('');

    return (
        isLoading ? <div>Loading...</div> :
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {data?.results.map((location: any, key: any) =>
                    <ListItem key={key} sx={{ width: '400px', bgcolor: 'gray', color: 'white', marginTop: '12px', borderRadius: '6px' }} alignItems="flex-start">
                        <Link to={`${location.id}`}>
                            <ListItemText
                                primary={location.name}
                                secondary={
                                    <>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="blue"
                                        >
                                            Type: {location.type}
                                        </Typography>
                                    </>
                                }

                            />
                        </Link>
                    </ListItem>
                )}
            </List>
    )
}

export default Locations;