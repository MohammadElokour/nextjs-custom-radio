import React from "react";
import PropTypes from 'prop-types';
import { Grid, Box, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const CustomRadio = (props) => (
  <Grid container justifyContent="center" alignItems="center">
    <Box
      sx={{
        borderRadius: 4,
        border: "1px solid #232323",
        width: 400,
        overflow: "hidden",
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <RadioGroup
          defaultValue={props.radioData[0]?.value}
          name="custom-radio-buttons"
        >
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            sx={{ height: 50, backgroundColor: "#202020" }}
          >
            <Typography
              variant="body1"
              color="initial"
              fontWeight="bold"
              fontFamily="Poppins"
            >
              {props.radioTitle}
            </Typography>
          </Grid>
          <>
            {props.radioData.map((radioElement) => (
              <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                sx={{ height: 50, px: 2.5 }}
              >
                <Typography
                  fontSize={14}
                  variant="body1"
                  color="initial"
                  fontWeight="bold"
                  fontFamily="Poppins"
                >
                  {radioElement.title}{" "}
                  <Typography variant="caption" color="#cbcbcb">
                    ({radioElement.subTitle})
                  </Typography>
                </Typography>
                <FormControlLabel
                  value={radioElement.value}
                  control={
                    <Radio
                      sx={{p: 0, border: "1px solid #232323" }}
                      disableRipple
                      checkedIcon={<CheckCircleIcon />}
                    />
                  }
                />
              </Grid>
            ))}
          </>
        </RadioGroup>
      </FormControl>
    </Box>
  </Grid> 
)

CustomRadio.defaultProps = {
  radioTitle: "Choose one of the following options: ",
  radioData: [
    {title: "Option 1", subTitle:"this is the 1st option", value: 1 },
    {title: "Option 2", subTitle:"this is the 2nd option", value: 2 },
    {title: "Option 3", subTitle:"this is the 3rd option", value: 3 },
  ],
};

CustomRadio.propTypes = {
  radioTitle: PropTypes.string,
  radioData: PropTypes.array,
}

export default CustomRadio;
