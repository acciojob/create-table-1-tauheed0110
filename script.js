const table = document.getElementById("sampleTable");
const tbody= document.getElementsByTagName("tbody")[0];

function insert_Row() {
    tbody.innerHTML = `
    <tr>
        <td>New Cell1</td>
        <td>New Cell2</td>
    </tr>
  ` + tbody.innerHTML;
}
