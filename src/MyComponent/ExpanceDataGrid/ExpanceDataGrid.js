import DataGrid, {
  Column,
  HeaderFilter,
  Item,
  Pager,
  Paging,
  SearchPanel,
  Toolbar,
} from "devextreme-react/data-grid";

export const ExpanceDataGrid = (props) => {
  return (
    <>
      <DataGrid
        dataSource={props.items}
        allowColumnResizing
        wordWrapEnabled
        hoverStateEnabled
        columnAutoWidth
        showBorders
        showColumnLines
        showRowLines={false}
      >
        <SearchPanel visible />
        <Paging enabled defaultPageSize={5} />
        <Pager showNavigationButtons />
        <HeaderFilter visible />

        <Column dataField="Title" caption="Title" />
        <Column dataField="Price" caption="Price" />
        <Column dataField="Description" caption="Description" />
        <Column dataField="Date" caption="Date" />

        <Paging defaultPageSize={5} />
      </DataGrid>
    </>
  );
};
