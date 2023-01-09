function calculate() {
  // Inputs section
  const members = parseInt(document.getElementById('members').value);
  const monthlyFee = parseInt(document.getElementById('monthly-fee').value);
  const averageRentalFee = parseInt(document.getElementById('avg-rental-fee').value);
  const hoursOpen = parseInt(document.getElementById('hours-open').value);
  const memberHoursPerMonth = parseInt(document.getElementById('member-hours-per-month').value);
  const numBays = parseInt(document.getElementById('bays').value);
  const monthlyCosts = parseInt(document.getElementById('monthly-costs').value);

  // Revenue section
  const memberValueInput = document.getElementById('member-value');
  const montlyRevInput = document.getElementById('monthly-rev');
  const yearlyRevInput = document.getElementById('yearly-rev');
  const membersNeededInput = document.getElementById('members-needed');
  const invUtilInput = document.getElementById('inv-util');

  const memberValue = (monthlyFee + memberHoursPerMonth * averageRentalFee); 
  memberValueInput.value = memberValue;
  montlyRevInput.value = memberValue * members;
  yearlyRevInput.value = memberValue * members * 12;
  membersNeededInput.value = Math.ceil(monthlyCosts / memberValue);
  invUtilInput.value = (members * memberHoursPerMonth * 12) / (numBays * hoursOpen * 365);
  
}