// This code selects the value you given in grid and saves it into the page item
// You have to select affected item to add value into page item

var model = apex.region("grid").widget().interactiveGrid("getViews", "grid").model; // LINEID is the region id of IG
var n_dist_amount, n_total = 0;
var col_gl_amount = model.getFieldKey("AMOUNT");
model.forEach(function(igrow)
       {
               
               n_dist_amount = parseInt(igrow[col_gl_amount], 10);
               if (!isNaN(n_dist_amount)) {
                         n_total += n_dist_amount;
          }
  }
      );
     
console.log(n_total);

$s('P334_GRID_SUM_AMOUNT', n_total);
