import { useGetCharacterByIDQuery } from '../services/character';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

const status: any = {
    Alive: 'green',
    Dead: 'red',
    unknown: 'yellow'
}

const Character = (props: any) => {
    const { data, error, isLoading } = useGetCharacterByIDQuery(props.id);

    return (
        isLoading ? <div>Loading...</div> :
            <List sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ListItem sx={{ width: '480px', bgcolor: '#95a5a6', color: 'white', marginTop: '12px', borderRadius: '6px' }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="avatar" src={data?.image} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={data?.name}
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'block' }}
                                    component="span"
                                    variant="body2"
                                >
                                    Species: {data?.species}
                                </Typography>
                                <Typography
                                    sx={{ display: 'block' }}
                                    component="span"
                                    variant="body2"
                                >
                                    Gender: {data?.gender}
                                </Typography>
                                <Typography
                                    sx={{ display: 'block' }}
                                    component="span"
                                    variant="body2"
                                >
                                    Origin: {data?.origin.name}
                                </Typography>
                                <Typography
                                    sx={{ display: 'block' }}
                                    component="span"
                                    variant="body2"
                                    color={status[data?.status || 'unknown']}
                                >
                                    Status: {data?.status}
                                </Typography>
                            </>
                        }

                    />
                </ListItem>
            </List>
    )
}

export default Character;