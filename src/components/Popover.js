import React from 'react';
import Box from "@mui/material/Box";
import { Popover } from '@mui/material';

const CustomPopover = ({toggle, handleClose, children}) => {
  const open = Boolean(toggle);
  
  return (
    <React.Fragment>
    <div>{(children.props.children.length>0)?
      <Popover
        id=''
        open={open}
        anchorEl={toggle}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            borderRadius: "5px",
            transform : "translate(0,10%)",
            width: "380px",
          }
        }}
      >
        <Box
          sx={{
            position: "relative",
            mt: "15px",
            "&::before": {
              backgroundColor: '#6ebcc1',
              content: '""',
              display: "block",
              position: "absolute",
              width: 12,
              height: 30,
              top: -8,
              transform: "rotate(45deg)",
              left: "calc(85%)"
            }
          }}
        />
          <div style={{backgroundColor: '#6ebcc1' }}>{children}</div>
        </Popover>:''}
    </div>
    </React.Fragment>
  );
}



export default CustomPopover