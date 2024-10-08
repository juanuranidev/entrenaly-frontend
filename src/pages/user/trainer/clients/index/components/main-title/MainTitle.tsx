import React, { useState } from "react";
import { Button } from "@mui/material";
import Icons from "lib/utils/icons/icons";
import PageTitle from "components/common/page-title/PageTitle";
import AddClientForm from "components/forms/add-client-form/AddClientForm";

export default function MainTitle() {
  const [openClientDrawer, setOpenClientDrawer] = useState<boolean>(false);

  return (
    <React.Fragment>
      <PageTitle
        title="Clientes"
        action={
          <Button
            variant="contained"
            startIcon={<Icons.add />}
            onClick={() => setOpenClientDrawer(true)}
          >
            Agregar nuevo
          </Button>
        }
      />
      <AddClientForm
        open={openClientDrawer}
        onClose={() => setOpenClientDrawer(false)}
      />
    </React.Fragment>
  );
}
