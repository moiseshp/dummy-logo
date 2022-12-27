import * as icons from 'components/icons';
import ColorPicker from 'components/ColorPicker';
import TextField from '@uitoolkit/TextField';
import Slider from '@uitoolkit/Slider';
import Typography from '@uitoolkit/Typography';
import Stack from '@uitoolkit/Stack';
import Box from '@uitoolkit/Box';
import Tabs from '@uitoolkit/Tabs';
import Button from '@uitoolkit/Button';
import Card from '@uitoolkit/Card';
import iconData from 'components/icons/icon-data.json';
import { useLogo } from 'contexts/LogoProvider';

const Isotype = () => {
  const [logo, updateLogo] = useLogo();
  return (
    <Tabs
      fixesTabs
      items={[
        { value: 'icons', text: 'Icons' },
        { value: 'color', text: 'Size & Color' },
      ]}
      py={3}
      px={1}
    >
      <Stack spacing={4} value="icons">
        <Box>
          <Typography variant="body2" color="textSecondary">
            Search icon
          </Typography>
          <TextField fullWidth placeholder="Eg. Natural o cow" />
          <Box mt={2}>
            {['category 1', 'category 2', 'category 3', 'category 4', 'category 5'].map((item) => (
              <Button
                key={item}
                size="small"
                variant="outlined"
                style={{ marginRight: 10, marginBottom: 10 }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Box>
        <Box>
          <Box
            display="grid"
            style={{
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: 'auto',
              gridGap: '1rem',
            }}
          >
            {iconData.map(({ id, name }) => {
              const Icon = icons[id];
              return (
                <Box key={id} textAlign="center" onClick={() => updateLogo({ iconId: id })}>
                  <Card hasBorder bgColor="transparent">
                    <Icon color="textSecondary" />
                    <Typography variant="caption" color="textSecondary" mb={0}>
                      {name}
                    </Typography>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Stack>
      <Stack spacing={4} value="color">
        <Box>
          <Typography variant="body2" color="textSecondary">
            Size
          </Typography>
          <Slider
            value={logo.iconSize}
            min={50}
            max={200}
            onChange={(event) =>
              updateLogo({
                iconSize: Number(event.target?.value),
              })
            }
          />
        </Box>
        <Box>
          <ColorPicker
            width={236}
            height={160}
            color={logo.iconColor}
            onChange={(color) => updateLogo({ iconColor: color.hex })}
          />
        </Box>
      </Stack>
    </Tabs>
    //   <div>Isotype</div>
    //   <p>Search your isotype</p>
    //   <p>Selected icon</p>
    //   <p>Filter by category</p>
    //   <p>Color</p>
    //   {iconData.map(({ id, name }) => {
    //     const MyIcon = icons[id];
    //     return (
    //       <div key={id}>
    //         <p>{name}</p>
    //         <button onClick={() => updateLogo({ iconId: id })}>
    //           <MyIcon />
    //         </button>
    //       </div>
    //     );
    //   })}
    // </div>
  );
};

export default Isotype;
