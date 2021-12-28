package com.psl.training.EASMProject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

import junit.framework.Assert;

public class TestReports {
	
	WebDriver driver;
	
	
	@Test
	public void driverSetup() {
		
		System.setProperty("webdriver.gecko.driver","E:\\Persistent\\Project\\Back-end\\Backend-final\\EASMProject\\drivers\\geckodriver.exe");
		String baseUrl = "http://localhost:4200/";
		System.out.println("Opening the site");
		driver = new FirefoxDriver();
		driver.get(baseUrl);
		driver.manage().window().maximize();
		String testTitle = "Employee Assessment Score Management";
		String originalTitle = driver.getTitle();
		Assert.assertEquals(originalTitle, testTitle);
	}
	
	@Test
	public void signUp() {
		
		driver.findElement(By.name("adminId")).sendKeys("1234556");
		driver.findElement(By.name("firstname")).sendKeys("ABCD");
		driver.findElement(By.name("lastname")).sendKeys("EFGH");
		driver.findElement(By.name("emailId")).sendKeys("ABCD@gmail.com");
		driver.findElement(By.name("password")).sendKeys("12345678");
		driver.findElement(By.id("signup")).click();
		
		
	}

}
