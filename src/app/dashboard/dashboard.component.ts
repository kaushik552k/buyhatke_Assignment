import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {

  }

// function to search coins in list
  searchCoins() {
    var input, filter, table, tableRow, tableData, txtValue;
    input = document.getElementById('userInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('coinsTable');
    tableRow = table.getElementsByTagName('tr');
    for (var i = 0; i < tableRow.length; i++) {
      tableData = tableRow[i].getElementsByTagName('td')[0];
      if (tableData) {
        txtValue = tableData.textContent || tableData.innerText;
        for(let j=0;j<filter.length;j++){
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tableRow[i].style.display = '';
          } else {
            tableRow[i].style.display = 'none';
          }
        }
      }
    }
  }
}
