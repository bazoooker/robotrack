<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("description", "Разработка веб-сайтов и интернет-магазинов. Контекстная реклама и поисковое продвижение.");
$APPLICATION->SetPageProperty("keywords", "e1media");
$APPLICATION->SetTitle("Вакансии");
$APPLICATION->SetPageProperty("title", "Вакансии - E1MEDIA");
?>

<div class="container">
	<div class="row no-gutters">
		<div class="col-12 col-md-10 offset-md-1">

			<section class="section">
				<?$APPLICATION->IncludeComponent("bitrix:breadcrumb","",Array(
				        "START_FROM" => "0", 
				        "PATH" => "", 
				        "SITE_ID" => "s1" 
				    )
				);?>


			<h1>Вакансии</h1>



		</div>
	</div>
</div>




<?
	include($_SERVER['DOCUMENT_ROOT']."/includes/feedbackform.php");
?>




<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>