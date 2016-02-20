When(/^I visit the homepage$/) do
  visit '/'
end

Then(/^I see the demo page$/) do
  expect(page.body).to have_content "Bar Graph"
  expect(page.body).to have_content "Line Graph"
end
