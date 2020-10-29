import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Action() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Action
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Payout</MenuItem>
        <MenuItem onClick={handleClose}>Export</MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </div>
  );
}

export default Action;
