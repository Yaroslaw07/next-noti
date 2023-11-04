import { Box, Paper, Typography } from "@mui/material";
import { FC, useState } from "react";
import VaultModule from "./VaultModule";
import HR from "@/components/ui/HR";
import SettingsModule from "./SettingsModule";
import AddModule from "./AddModule";
import NotesList from "./NotesList";
import SidebarPaper from "./SidebarPaper";

const Sidebar: FC = () => {
  const [newNoteAdded, setNewNoteAdded] = useState(false);

  const handleNewNoteAdded = () => {
    setNewNoteAdded(true);
  };

  return (
    <SidebarPaper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          flexWrap: "nowrap",
          height: "100%",
        }}
      >
        <VaultModule />
        <HR />
        <SettingsModule />
        <AddModule onNewNoteAdded={handleNewNoteAdded} />
        <HR />
        <NotesList newNoteAdded={newNoteAdded} />
      </Box>
    </SidebarPaper>
  );
};

export default Sidebar;
