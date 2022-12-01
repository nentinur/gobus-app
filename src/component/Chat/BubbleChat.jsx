import { Box, TextField } from "@mui/material";
export const BubbleChat = () => {
  return (
    <div>
      <Box
        sx={{
          alignItems: "right",
          justifyContent: "right",
          textAlign: "right",
          backgroundColor: "#e3f2fd",
          borderRadius: 3,
          padding: 1,
          width: 100,
          margin: 1,
          marginLeft: 30,
        }}
      >
        P
      </Box>
      <Box
        sx={{
          alignItems: "left",
          justifyContent: "left",
          textAlign: "left",
          backgroundColor: "#90caf9",
          borderRadius: 3,
          padding: 1,
          width: 100,
          margin: 1,
        }}
      >
        Siyap
      </Box>
    </div>
  );
};
