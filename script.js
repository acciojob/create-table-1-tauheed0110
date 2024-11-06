const table = document.getElementById("sampleTable");

function insert_Row() {
    table.innerHTML = `
    <tr>
        <td>New cell1</td>
        <td>New cell2</td>
    </tr>
  ` + table.innerHTML;
}
