<?php include ('includes/cookies.php');?>

<!DOCTYPE html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
  <link rel="stylesheet" href="less/style.css" id="main_styleshhet">  
  <?php if (isset($_COOKIE['theme'])) :?>
    <link rel="stylesheet" href="less/<?= $_COOKIE['theme'] ?>_theme.css" id="theme_stylesheet">
  <?php else : ?>
    <link rel="stylesheet" href="less/dark_theme.css" id="theme_stylesheet">
  <?php endif; ?> 

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo $content['title'];?></title>
</head>


<body>

<?php include ('includes/header.php'); ?>

<?php 
  

  $connect_options = mysqli_connect("localhost", "testo", "0000", "calendar");
  $query = 'SELECT * FROM busy WHERE date >= CURDATE();'; // Yeah... date is column name in that database
  $result = mysqli_query($connect_options, $query);

  $busy_months = [];
  if(mysqli_num_rows($result) > 0){
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)){
      $busy_months[$i] = $row['date'];
      $i++;
    }
  }
?>


<section class="calendar">
  <svg viewBox="0 0 750 172" xmlns="http://www.w3.org/2000/svg" class="wide_screen">            
    <path d="M 1 0 V 10 H 100" class="comment_color" stroke-width="2.5" fill="none"/>
    <path d="M 1 0 V 175" class="comment_color" stroke-width="2.5" fill="none"/>
  </svg>
  <h2 class="headline"><?php echo $content['calendar']['h2'];?></h2>  
  <div class="big_spacer"></div>

  <div class="calendar_scroller" id="style-1">
  <?php for ($i=0; $i<21; $i++) : ?>
    <?php 
      $curent_date = date('Y-m-d', strtotime(" +$i day"));
      $search_res = array_search($curent_date, $busy_months);
      $additional_class = "vacant";

      if(gettype($search_res) == "integer"){ //then it's a match, then
        $additional_class = "busy";
      }
    ?>
    <div 
      class="day_cell <?= $additional_class;?>" 
      data-tooltip="<?= $content['calendar']["placeholder_$additional_class"];?>"
    >
      <h1 class="month_day"><?= date('d', strtotime(" +$i day")); ?></h1>
      <?php 
        $month_Num = date('m', strtotime(" +$i day"));
        $month_Num = (int)$month_Num;
        $month_name = ".0" . $month_Num;
      ?>
      <h4 class="month_name"><?= $month_name; ?></h4>
    </div>
  <?php endfor; ?>
  </div>
  <div class="big_spacer"></div>
</section>


<?php readfile ('includes/footer.php'); ?>