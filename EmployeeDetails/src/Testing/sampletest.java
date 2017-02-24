//package Testing;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class sampletest {

	@Test
	public void Should_Add_Item_Deatails() {
		System.setProperty("webdriver.chrome.driver", "/Users/siq/Downloads/chromedriver");
		WebDriver driver = new ChromeDriver();
		driver.get("http://localhost:3000");
		String empname ="Sanjay";
		String empid ="102";
		driver.findElement(By.name("emp_name")).sendKeys(empname);
		driver.findElement(By.name("emp_id")).sendKeys(empid);		
		driver.findElement(By.xpath("//button[@type='submit']")).click();
		System.out.println("Empname and Empid details added in Database");
	}
}
