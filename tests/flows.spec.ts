import {test,expect} from '@playwright/test';
test('首页、详情、命盘、会员、资料和浏览器返回',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');await expect(page.getByRole('heading',{name:'今日综合运势'})).toBeVisible();
 await expect(page.locator('.device')).toHaveCSS('width','393px');await expect(page.locator('.device')).toHaveCSS('height','759px');
 await expect.poll(()=>page.locator('img').evaluateAll(imgs=>imgs.every(i=>(i as HTMLImageElement).complete&&(i as HTMLImageElement).naturalWidth>0))).toBeTruthy();
 await page.screenshot({path:'../../work/demo-home.png'});
 await page.getByRole('button',{name:/今日解读/}).click();await expect(page.locator('.daily-hero')).toContainText('主动沟通');
 await page.getByRole('button',{name:'收藏今日解读',exact:true}).click();await expect(page.getByRole('button',{name:'取消收藏'})).toHaveAttribute('aria-pressed','true');
 await page.getByRole('button',{name:'返回首页'}).click();await page.getByRole('button',{name:/本命星盘/}).click();await expect(page.locator('.nav')).toContainText('本命星盘');await expect(page.locator('table')).toContainText('白蜡金');
 await page.getByRole('tab',{name:'五行能量'}).click();await expect(page.locator('.analysis-content')).toContainText('五行的平衡');
 await page.getByRole('button',{name:'占卜星盘'}).click();await expect(page.locator('.astrology')).toBeVisible();await page.getByRole('button',{name:'查看八字命盘'}).click();
 await page.getByRole('button',{name:'返回首页'}).click();await page.getByRole('button',{name:/年度运势/}).click();await expect(page.getByRole('heading',{name:'无犯太岁'})).toBeVisible();await page.getByRole('tab',{name:'事业机遇'}).click();await page.getByRole('button',{name:/开通会员/}).click();await page.getByRole('button',{name:'体验解锁（无需支付）'}).click();await expect(page.locator('.analysis-content')).toContainText('把准备做在机会之前');
 await page.getByRole('button',{name:'返回首页'}).click();await page.getByRole('button',{name:/缘分分析/}).click();await expect(page.locator('table')).toContainText('天乙贵人');await page.getByRole('tab',{name:'情感特质'}).click();await expect(page.getByRole('heading',{name:'倾听与回应'})).toBeVisible();
 await page.getByRole('tab',{name:'命主信息'}).click();await page.getByRole('button',{name:'✎ 编辑'}).click();await page.getByLabel('姓名',{exact:true}).fill('林晓');await page.getByRole('button',{name:'保存资料'}).click();await expect(page.locator('.profile-info')).toContainText('林晓');await page.reload();await expect(page.locator('.profile-info')).toContainText('林晓');
 await page.getByRole('button',{name:'返回首页'}).click();await page.goBack();await expect(page.locator('.nav')).toContainText('缘分分析');expect(errors).toEqual([]);
});
test('壁纸切换、下载、图库与抽签完整流程',async({page})=>{
 await page.goto('/');await page.getByRole('button',{name:/幸运壁纸/}).click();await expect(page.getByRole('dialog')).toBeVisible();await page.getByRole('button',{name:'下一张壁纸'}).click();await expect(page.locator('.wallpaper-caption')).toContainText('步步高升');
 const download=page.waitForEvent('download');await page.getByRole('button',{name:/保存壁纸到相册/}).click();expect((await download).suggestedFilename()).toBe('步步高升.png');
 await page.getByRole('button',{name:/去壁纸馆看看/}).click();await page.getByRole('button',{name:'缘来是你'}).click();await expect(page.locator('.wallpaper-caption')).toContainText('缘来是你');await page.screenshot({path:'../../work/demo-wallpaper.png'});await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.getByRole('button',{name:/今日幸运签/}).click();await expect.poll(()=>page.locator('.fortune-cylinder img').evaluate((i:HTMLImageElement)=>i.complete&&i.naturalWidth>0)).toBeTruthy();await page.screenshot({path:'../../work/demo-draw.png'});await page.getByRole('button',{name:'抽取幸运签',exact:true}).click();await expect(page.getByRole('button',{name:'正在抽签…'})).toBeDisabled();await expect(page.locator('.fortune-result')).toBeVisible();await page.getByRole('button',{name:'再抽一次'}).click();await expect(page.locator('.fortune-result')).toBeVisible();await page.getByRole('button',{name:'带着好运，开启今天'}).click();await expect(page.getByRole('dialog')).toHaveCount(0);
});
test('窄屏无横向溢出，弹窗键盘焦点约束',async({page})=>{
 await page.setViewportSize({width:320,height:700});await page.goto('/');expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBe(320);await page.getByRole('button',{name:'个人资料'}).click();await expect(page.getByRole('button',{name:'关闭弹窗'})).toBeFocused();await page.keyboard.press('Shift+Tab');await expect(page.getByRole('button',{name:'保存资料'})).toBeFocused();await page.keyboard.press('Tab');await expect(page.getByRole('button',{name:'关闭弹窗'})).toBeFocused();await page.keyboard.press('Escape');await expect(page.getByRole('button',{name:'个人资料'})).toBeFocused();
});
