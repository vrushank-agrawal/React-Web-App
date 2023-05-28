import React, { useState } from 'react';

import { BLACKCN, BLUECN } from '../../utils/colors.js';
import { IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import CodeNektTable from '../../Components/CodeNektTable.js';
import { notifications as data } from '../utils/test-data.js';
import { CodeNektBell, CodeNektBellFill, CodeNektEye, CodeNektThreeDots } from '../../Components/CodeNektIcons.js';

const NotificationTableFontsize = "12px";
const NotificationTableHeadersize = "10px";

const NotificationDropdownActions = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const MenuOptions = ["Marquer comme lu", "Relancer le collaborateur", "Supprimer"]

    return (
        <>
            <IconButton onClick={handleClick}> <CodeNektThreeDots size={15} /> </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{paddingTop: 0}}
                MenuListProps={{ disablePadding: true }}
            >
                <MenuList sx={{padding: 0, margin: 0, }}>
                    {MenuOptions.map((option) => (
                        <MenuItem key={option} onClick={handleClose}
                            sx={{
                                fontSize: NotificationTableFontsize,
                                color: BLACKCN,
                                paddingTop: 0,
                                '&:hover': {
                                    color: BLUECN,
                                },
                                '&:hover::before': {
                                    content: '""',
                                    display: "inline-block",
                                    marginRight: "0.2rem",
                                    color: BLUECN,
                                },
                            }}>
                            {option}
                        </MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </>
    )
}

// change column fontsize in the cellStyle
const NotificationColumns = {
    names: [
        { title: "", sorting: false, filtering: false, search: false, render: () => { return(<CodeNektBellFill size={12} color={"red"} />) } },
        { title: "Date", field: "Date", width: 100, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "Type d'Intervention", field: "Type", width: 190, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "XX-000-XX", field: "XX", width: 160, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "Marque", field: "Marque", width: 90, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "Collaborateur", field: "Collaborateur", width: 140, cellStyle: {fontSize: NotificationTableFontsize}, headerStyle: {fontSize: NotificationTableHeadersize} },
        { title: "", field: "actions", width: 150, sorting: false, filtering: false, search: false,
            render: (rowData) => {
                return(
                <>
                    <IconButton> <CodeNektEye size={15} /> </IconButton>
                    <NotificationDropdownActions />
                </>
                )
            }
        },
    ],
}

const NotificationTable = () => {
    return (
        <CodeNektTable
            column={NotificationColumns}
            data={data}
            header={"NOTIFICATIONS"}
            rowsPerPage={5}
            selection={false}
            toolbar={false}
        />
    )
}

export default NotificationTable;