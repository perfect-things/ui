<Table class="test-class" rowSelector=".row-sel" round
	on:keydown on:dblclick on:select on:click>
	<thead>
		<tr><th>Year</th><th>Month</th><th>Price</th></tr>
	</thead>
	<thead>
		<tr><th colspan="3">Year: 2021</th></tr>
	</thead>
	<tbody>
		<tr class="row-sel"><td>2021</td><td>January</td><td>$100</td></tr>
		<tr class="row-sel"><td>2021</td><td>February</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>March</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>April</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>May</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>June</td><td>$80</td></tr>
	</tbody>
	<tbody class="row-sel row-group">
		<tr><td>2021</td><td>April 1</td><td>$80</td></tr>
		<tr><td>2021</td><td>April 2</td><td>$80</td></tr>
	</tbody>
	<tbody>
		<tr class="row-sel"><td>2021</td><td>May</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>July</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>August</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>September</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>October</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>November</td><td>$80</td></tr>
		<tr class="row-sel"><td>2021</td><td>December</td><td>$80</td></tr>
	</tbody>
	<tfoot>
		<tr><td colspan="2">Sum</td><td>$180</td></tr>
	</tfoot>
</Table>


<script>
import { Table } from '../../src/table';

</script>
