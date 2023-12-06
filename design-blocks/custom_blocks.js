/*// Define the 'income_block'
Blockly.Blocks['income_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Income Source:")
        .appendField(new Blockly.FieldTextInput("Salary"), "SOURCE")
        .appendField("Amount:")
        .appendField(new Blockly.FieldNumber(1000, 0), "AMOUNT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

// Define the 'expense_block'
Blockly.Blocks['expense_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Expense Category:")
        .appendField(new Blockly.FieldTextInput("Rent"), "CATEGORY")
        .appendField("Amount:")
        .appendField(new Blockly.FieldNumber(500, 0), "AMOUNT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

// Define the 'budget_calculator_block'
Blockly.Blocks['budget_calculator_block'] = {
  init: function() {
    this.appendStatementInput("INCOME")
        .setCheck(null)
        .appendField("Income");
    this.appendStatementInput("EXPENSES")
        .setCheck(null)
        .appendField("Expenses");
    this.setColour(60);
    this.setTooltip("Calculate your budget by subtracting expenses from income.");
  }
};

// Define the JavaScript generator for 'income_block'
Blockly.JavaScript['income_block'] = function(block) {
  var source = block.getFieldValue('SOURCE');
  var amount = Number(block.getFieldValue('AMOUNT'));
  return 'addIncome("' + source + '", ' + amount + ');\n';
};

// Define the JavaScript generator for 'expense_block'
Blockly.JavaScript['expense_block'] = function(block) {
  var category = block.getFieldValue('CATEGORY');
  var amount = Number(block.getFieldValue('AMOUNT'));
  return 'addExpense("' + category + '", ' + amount + ');\n';
};

// Define the JavaScript generator for 'budget_calculator_block'
Blockly.JavaScript['budget_calculator_block'] = function(block) {
  var incomeCode = Blockly.JavaScript.statementToCode(block, 'INCOME');
  var expenseCode = Blockly.JavaScript.statementToCode(block, 'EXPENSES');
  return 'calculateBudget();\n';
};

// Supporting Functions with UI Updates
let totalIncome = 0;
let totalExpenses = 0;

function addIncome(source, amount) {
  totalIncome += amount;
  updateIncomeDisplay(); // Update the income display on the UI
}

function addExpense(category, amount) {
  totalExpenses += amount;
  updateExpenseDisplay(); // Update the expense display on the UI
}

function calculateBudget() {
  let netBudget = totalIncome - totalExpenses;
  updateBudgetDisplay(netBudget); // Update the budget display on the UI
}

// Additional UI Update Functions
function updateIncomeDisplay() {
  document.getElementById('incomeDisplay').textContent = `Total Income: ${totalIncome}`;
}

function updateExpenseDisplay() {
  document.getElementById('expenseDisplay').textContent = `Total Expenses: ${totalExpenses}`;
}

function updateBudgetDisplay(netBudget) {
  document.getElementById('budgetDisplay').textContent = `Net Budget: ${netBudget}`;
}


// Income Source Block
Blockly.Blocks['income_source'] = {
  init: function() {
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Income Source");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['income_source'] = function(block) {
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  return [amount, Blockly.JavaScript.ORDER_ATOMIC];
};

// Expense Block
Blockly.Blocks['expense'] = {
  init: function() {
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Expense");
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['expense'] = function(block) {
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  return [amount, Blockly.JavaScript.ORDER_ATOMIC];
};

// Savings Block
Blockly.Blocks['savings'] = {
  init: function() {
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Savings");
    this.setOutput(true, "Number");
    this.setColour(110);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['savings'] = function(block) {
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  return [amount, Blockly.JavaScript.ORDER_ATOMIC];
};

// Budget Block
Blockly.Blocks['budget'] = {
  init: function() {
    this.appendValueInput("INCOME")
        .setCheck("Number")
        .appendField("Budget - Income");
    this.appendValueInput("EXPENSES")
        .setCheck("Number")
        .appendField("Expenses");
    this.appendValueInput("SAVINGS")
        .setCheck("Number")
        .appendField("Savings");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['budget'] = function(block) {
  var income = Blockly.JavaScript.valueToCode(block, 'INCOME', Blockly.JavaScript.ORDER_NONE);
  var expenses = Blockly.JavaScript.valueToCode(block, 'EXPENSES', Blockly.JavaScript.ORDER_NONE);
  var savings = Blockly.JavaScript.valueToCode(block, 'SAVINGS', Blockly.JavaScript.ORDER_NONE);
  var budget = '(' + income + ' - ' + expenses + ' - ' + savings + ')';
  return [budget, Blockly.JavaScript.ORDER_ATOMIC];
};

// Input Number Block
Blockly.Blocks['input_number'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.JavaScript['input_number'] = function(block) {
  var number = block.getFieldValue('NUM');
  return [number, Blockly.JavaScript.ORDER_ATOMIC];
};*/

// Define the 'income_block'
Blockly.Blocks['income_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Income Source:")
        .appendField(new Blockly.FieldTextInput("Salary"), "SOURCE")
        .appendField("Amount:")
        .appendField(new Blockly.FieldNumber(1000, 0), "AMOUNT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

// Define the 'expense_block'
Blockly.Blocks['expense_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Expense Category:")
        .appendField(new Blockly.FieldTextInput("Rent"), "CATEGORY")
        .appendField("Amount:")
        .appendField(new Blockly.FieldNumber(500, 0), "AMOUNT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

// Define the 'budget_calculator_block'
Blockly.Blocks['budget_calculator_block'] = {
  init: function() {
    this.appendStatementInput("INCOME")
        .setCheck(null)
        .appendField("Income");
    this.appendStatementInput("EXPENSES")
        .setCheck(null)
        .appendField("Expenses");
    this.setColour(60);
    this.setTooltip("Calculate your budget by subtracting expenses from income.");
  }
};

// Define the JavaScript generator for 'income_block'
Blockly.JavaScript['income_block'] = function(block) {
  var source = block.getFieldValue('SOURCE');
  var amount = Number(block.getFieldValue('AMOUNT'));
  return 'addIncome("' + source + '", ' + amount + ');\n';
};

// Define the JavaScript generator for 'expense_block'
Blockly.JavaScript['expense_block'] = function(block) {
  var category = block.getFieldValue('CATEGORY');
  var amount = Number(block.getFieldValue('AMOUNT'));
  return 'addExpense("' + category + '", ' + amount + ');\n';
};

// Define the JavaScript generator for 'budget_calculator_block'
Blockly.JavaScript['budget_calculator_block'] = function(block) {
  var incomeCode = Blockly.JavaScript.statementToCode(block, 'INCOME');
  var expenseCode = Blockly.JavaScript.statementToCode(block, 'EXPENSES');
  return 'calculateBudget();\n';
};

// Supporting Functions
let totalIncome = 0;
let totalExpenses = 0;

function addIncome(source, amount) {
  totalIncome += amount;
  // Additional logic for handling income
}

function addExpense(category, amount) {
  totalExpenses += amount;
  // Additional logic for handling expenses
}

function calculateBudget() {
  let netBudget = totalIncome - totalExpenses;
  console.log("Net Budget: ", netBudget);
  // Additional UI update logic
}

// Supporting Functions with UI Updates
let totalIncome = 0;
let totalExpenses = 0;

function addIncome(source, amount) {
  totalIncome += amount;
  updateIncomeDisplay(); // Update the income display on the UI
}

function addExpense(category, amount) {
  totalExpenses += amount;
  updateExpenseDisplay(); // Update the expense display on the UI
}

function calculateBudget() {
  let netBudget = totalIncome - totalExpenses;
  updateBudgetDisplay(netBudget); // Update the budget display on the UI
}

// Additional UI Update Functions
function updateIncomeDisplay() {
  document.getElementById('incomeDisplay').textContent = `Total Income: ${totalIncome}`;
}

function updateExpenseDisplay() {
  document.getElementById('expenseDisplay').textContent = `Total Expenses: ${totalExpenses}`;
}

function updateBudgetDisplay(netBudget) {
  document.getElementById('budgetDisplay').textContent = `Net Budget: ${netBudget}`;
}


// Investment Blocks
Blockly.Blocks['risk_assessment_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Risk Tolerance:")
        .appendField(new Blockly.FieldDropdown([["Low", "LOW"], ["Medium", "MEDIUM"], ["High", "HIGH"]]), "RISK");
    this.setOutput(true, "RiskLevel");
    this.setColour(210);
    this.setTooltip("Select your risk tolerance level.");
  }
};

Blockly.JavaScript['risk_assessment_block'] = function(block) {
  var riskLevel = block.getFieldValue('RISK');
  return ['"' + riskLevel + '"', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['asset_allocation_block'] = {
  init: function() {
    this.appendValueInput("RISK_LEVEL")
        .setCheck("RiskLevel")
        .appendField("Asset Allocation based on Risk:");
    this.appendDummyInput()
        .appendField("Stocks (%)")
        .appendField(new Blockly.FieldNumber(60, 0, 100), "STOCKS")
        .appendField("Bonds (%)")
        .appendField(new Blockly.FieldNumber(30, 0, 100), "BONDS")
        .appendField("Others (%)")
        .appendField(new Blockly.FieldNumber(10, 0, 100), "OTHERS");
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("Set your asset allocation based on your risk tolerance.");
    this.setOutput(true, "Allocation");
  }
};

Blockly.JavaScript['asset_allocation_block'] = function(block) {
  var riskLevel = Blockly.JavaScript.valueToCode(block, 'RISK_LEVEL', Blockly.JavaScript.ORDER_ATOMIC);
  var stocks = block.getFieldValue('STOCKS');
  var bonds = block.getFieldValue('BONDS');
  var others = block.getFieldValue('OTHERS');
  var code = `allocateAssets(${riskLevel}, ${stocks}, ${bonds}, ${others})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['investment_simulator_block'] = {
  init: function() {
    this.appendValueInput("ALLOCATION")
        .setCheck("Allocation")
        .appendField("Simulate Investment for Allocation:");
    this.appendDummyInput()
        .appendField("Years")
        .appendField(new Blockly.FieldNumber(10, 1), "YEARS");
    this.setColour(60);
    this.setTooltip("Simulate the growth of your investment over a number of years.");
    this.setOutput(true, "Number");
  }
};

Blockly.JavaScript['investment_simulator_block'] = function(block) {
  var allocation = Blockly.JavaScript.valueToCode(block, 'ALLOCATION', Blockly.JavaScript.ORDER_ATOMIC);
  var years = block.getFieldValue('YEARS');
  var code = `simulateInvestment(${allocation}, ${years})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// Assuming this part remains the same for defining blocks

// Supporting JavaScript function for asset allocation
function allocateAssets(riskLevel) {
  let stocks, bonds, others;
  switch (riskLevel) {
    case 'LOW':
      stocks = 30; // Low risk: Less in stocks
      bonds = 50; 
      others = 20;
      break;
    case 'MEDIUM':
      stocks = 50; // Medium risk: Balanced allocation
      bonds = 30;
      others = 20;
      break;
    case 'HIGH':
      stocks = 70; // High risk: More in stocks
      bonds = 20;
      others = 10;
      break;
    default:
      stocks = 50; // Default to medium risk allocation
      bonds = 30;
      others = 20;
  }
  console.log(`Allocating assets for ${riskLevel} risk: ${stocks}% Stocks, ${bonds}% Bonds, ${others}% Others`);
  return { stocks, bonds, others };
}

// Supporting JavaScript function for investment simulation
function simulateInvestment(allocation, years) {
  // Simple annual compounding formula for each asset class
  const stockGrowth = compoundInterest(allocation.stocks, 0.07, years);
  const bondGrowth = compoundInterest(allocation.bonds, 0.03, years);
  const otherGrowth = compoundInterest(allocation.others, 0.02, years);

  const totalGrowth = stockGrowth + bondGrowth + otherGrowth;
  console.log(`Projected value after ${years} years: ${totalGrowth}`);
  return totalGrowth;
}

function compoundInterest(principal, annualRate, years) {
  return principal * Math.pow((1 + annualRate), years);
}

// Financial Education Blocks
function getScenarioDetails(scenario) {
    const scenarios = {
      "BUY_HOUSE": "Buying a house involves saving for a down payment, understanding mortgage rates, and managing property taxes.",
      "RETIREMENT": "Planning for retirement includes investment in retirement accounts, understanding of pensions, and long-term healthcare planning.",
      "SAVING_FOR_COLLEGE": "Saving for college involves understanding 529 plans, educational savings accounts, and scholarships.",
      "EMERGENCY_FUND": "Building an emergency fund requires setting aside 3-6 months of expenses for unforeseen circumstances.",
      "INVESTING_IN_STOCKS": "Investing in stocks involves understanding stock markets, diversification, and risk management.",
    };
  
    return scenarios[scenario] || "Scenario details not available.";
  }

  function takeQuiz(topic) {
    const quizScores = {
      "BASIC_FINANCE": Math.floor(Math.random() * 21) + 80, // Random score between 80 and 100
      "INVESTING": Math.floor(Math.random() * 21) + 70, // Random score between 70 and 90
      "RETIREMENT_PLANNING": Math.floor(Math.random() * 21) + 60, // Random score between 60 and 80
      "SAVING_STRATEGIES": Math.floor(Math.random() * 21) + 75, // Random score between 75 and 95
      "RISK_MANAGEMENT": Math.floor(Math.random() * 21) + 65, // Random score between 65 and 85
    };
  
    return quizScores[topic] || 0;
  }
