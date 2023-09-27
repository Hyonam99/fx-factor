/* eslint-disable no-undef */
import React, { useState } from "react";
import { Box, Container, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import './market-price.scss';
import { useNavigate } from "react-router-dom";

const MarketPricing = (): React.JSX.Element => {

    return (
        <Container maxWidth={false} className="market-price-container">
            <Box className="market-price-container_wrapper">
                <h5>THE FX FACTOR PRICE TABLE</h5>
                <h1>RECENT MARKET PRICES</h1>
            </Box>

            <Box className="market-price-container_table">
                {EnhancedTable()}
            </Box>
        </Container>
    )
};

export default MarketPricing;

interface Data {
    name: string;
    price: number;
    bid: number;
    ask: number;
    change: number;
    change_: number
    spread: number
    time: number
}

function createData (
    name: string,
    price: number,
    bid: number,
    ask: number,
    change: number,
    change_: number,
    spread: number,
    time: number
): Data {
    return {
        name,
        price,
        bid,
        ask,
        change,
        change_,
        spread,
        time
    };
}

const rows = [
    createData('USD/EUR', 3.05, 3.7, 67, 4.3, 1.23, 3.225, 1.0214),
    createData('USD/GBP', 1.05, 3.7, 67, 4.3, 1.23, 3.225, 1.0214),
    createData('JPY/EUR', 2.68, 3.7, 67, 4.3, 1.23, 3.225, 1.0214),
    createData('USD/CAD', 3.05, 3.7, 67, 4.3, 1.23, 3.225, 1.0214),
    createData('GBP/EUR', 3.15, 3.7, 67, 4.3, 1.23, 3.225, 1.0214),
    createData('USD/ZNR', 7.05, 3.7, 67, 4.3, 1.23, 3.225, 1.0214)
];

function descendingComparator<T> (a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any> (
    order: Order,
    orderBy: Key
): (
        a: { [key in Key]: number | string },
        b: { [key in Key]: number | string },
    ) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T> (array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Pair'
    },
    {
        id: 'price',
        numeric: true,
        disablePadding: true,
        label: 'Price'
    },
    {
        id: 'bid',
        numeric: true,
        disablePadding: true,
        label: 'Bid'
    },
    {
        id: 'ask',
        numeric: true,
        disablePadding: true,
        label: 'Ask'
    },
    {
        id: 'change',
        numeric: true,
        disablePadding: false,
        label: 'Change'
    },
    {
        id: 'change_',
        numeric: true,
        disablePadding: false,
        label: 'Change%'
    },
    {
        id: 'spread',
        numeric: true,
        disablePadding: false,
        label: 'Spread'
    },
    {
        id: 'time',
        numeric: true,
        disablePadding: false,
        label: 'Time'
    }
];

interface EnhancedTableProps {
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    order: Order;
    orderBy: string;
}

function EnhancedTableHead (props: EnhancedTableProps) {
    const { order, orderBy, onRequestSort }
    = props;
    const createSortHandler
    = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow className="price-table-head-row">
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                        className="price-table-head-cell"
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id
                                ? (
                                    <Box component="span" sx={visuallyHidden}>
                                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                )
                                : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

function EnhancedTableToolbar () {

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 }
            }}
        >
            {(
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Currency
                </Typography>
            )}
            {(
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

function EnhancedTable () {
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState<keyof Data>('price');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const navigate = useNavigate()

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
        navigate(`/currency-details/${name}`)
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows
    = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
            ),
        [order, orderBy, page, rowsPerPage]
    );

    return (
        <Box sx={{ width: '100%' }} className="market-pricing_enhanced-table">
            <Paper sx={{ width: '100%', mb: 2 }} className="market-pricing_enhanced-table_wrapper">
                <EnhancedTableToolbar />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => { handleClick(event, row.name.replace("/", "-")); }}
                                        tabIndex={-1}
                                        key={row.name}
                                        sx={{ cursor: 'pointer' }}
                                        className="price-table-row"
                                    >
                                        <TableCell
                                            component="th"
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.price}</TableCell>
                                        <TableCell align="right">{row.bid}</TableCell>
                                        <TableCell align="right">{row.ask}</TableCell>
                                        <TableCell align="right">{row.change}</TableCell>
                                        <TableCell align="right">{row.change_}</TableCell>
                                        <TableCell align="right">{row.spread}</TableCell>
                                        <TableCell align="right">{row.time}</TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: (53) * emptyRows
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    );
}
